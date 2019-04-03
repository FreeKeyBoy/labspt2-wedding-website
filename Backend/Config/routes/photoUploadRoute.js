const db = require('../dbConfig')
const upload = require('../Photobucket/file-uploader')
const singleUpload = upload.single('image')

module.exports = server => {
  server.post('/users/:id/upload', addImage)
  server.get('/users/:id/live-photos', GetLivePhotos)
}

addImage = (req, res) => {
  const userId = req.params.id
  const content = req.body
  singleUpload(req, res, err => {
    if (err) {
      res.status(422).send({
        errors: [
          {
            title: 'Image Upload Error',
            detail: err.message,
          },
        ],
      })
    }
    const image = req.file.location
    const newImage = {
      imgUrl: image,
      name: content.name,
      user_id: userId,
      caption: content.caption,
    }
    console.log(newImage)
    db('livePhotos')
      .insert(newImage)
      .then(id => {
        res.status(201).send(newImage)
      })
      .catch(err => {
        res.status(500).send({
          error: err,
        })
      })
  })
}

GetLivePhotos = (req, res) => {
  const { id } = req.params
  console.log(id)
  db('livePhotos')
    .where('user_id', id)
    .then(tbl => res.json(tbl))
    .catch(err => {
      res.status(500).send(err)
    })
}