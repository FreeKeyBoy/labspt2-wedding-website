import  React, { Component } from 'react';
import { Input, Label } from 'reactstrap'
import { Modal, FormGroup, Button, FormText } from 'react-bootstrap'
import logo from '../../Images/jobdLogo.png'
import styled from 'styled-components'
import PhotoCard from '../weddingPhotos/photoCard';
import axios from 'axios';
import PhotoButton from './photoButton'


const Image = styled.img `
width: 100%
`
class WeddingPhotos extends Component {
    constructor(props){
      super(props);
      this.state ={
        photoCards: [],
        userInfo: [],
        show: false,
        caption: '',
        source: logo,
        image: [],
        userName: ''
      }
    }
      componentWillMount=()=>{
        this.setCardData();
      }

      setCardData = () =>{
        axios.get(`http://localhost:3700/users/1/live-photos`)
        .then(res=>{
          this.setState({photoCards: res.data})
        })
      }

      handleShow = e =>{
        this.setState({show: true})
      }
      handleClose = e =>{
        this.setState({show: false, source: ''})
      }
      fileChange = e =>{
       let image = e.target.files[0];
        let form = new FormData();
        form.append('image', image);
        console.log(form);
       this.setState({source: URL.createObjectURL(e.target.files[0]), image:form})
      }
      inputHandler = e =>{
        e.preventDefault();
        this.setState({ [e.target.name]:e.target.value})
      }

      addPhoto = (e) =>{
        e.preventDefault();
        const body = {
          image: this.state.image,
          caption: this.state.caption,
          name: this.state.userName
        }
        axios.post(`http://localhost:3700/users/1/live-upload`, body )
          .then(  (res) =>{
            console.log(res.data);
          })
      }


    
    
    render() {
      return (
        <div>
          <Button onClick={this.handleShow}>Add a photo</Button>
          <PhotoButton />
          
         <div>
          <Modal show={this.state.show} >
            <Modal.Header  >
              <h4>Add a Memory for the newlyweds</h4>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <input type="file" name="image" accept='image/*' onChange={this.fileChange} />
                <Image src={this.state.source} />
                <FormText color="muted"/>
                Please only upload Image files or Video files under 50MB. We appreciate your patience when uploading videos
                <FormText/> 
              </FormGroup>
              <FormGroup>
                <Label>Your name</Label>
                <Input type="text" name="userName" value={this.state.userName}  id="captionInput" onChange={this.inputHandler}/>
                <Label>Caption</Label>
                <Input type="text" name="caption" value={this.state.caption}  id="captionInput" onChange={this.inputHandler}/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.addPhoto}>Add Photo</button>
              <button onClick={this.handleClose}>close</button>
            </Modal.Footer>
          </Modal>
          </div>
          <h1>Live Wedding Photos</h1>
          {this.state.photoCards.map(img =>
          <PhotoCard key={img.imgURL} info={img}/>
            )}
        </div>
        );
    }
  }



  export  default WeddingPhotos;