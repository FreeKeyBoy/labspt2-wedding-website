exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rsvpAnswers')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('rsvpAnswers').insert([
        {
          id: 1,
          answer_body: 'question answer',
          rsvpQuestions_id: 1,
          users_id: 1,
          guestList_id: 1,
        },
        {
          id: 2,
          answer_body: 'question answer',
          rsvpQuestions_id: 2,
          users_id: 2,
          guestList_id: 2,
        },
        {
          id: 3,
          answer_body: 'question answer',
          rsvpQuestions_id: 3,
          users_id: 3,
          guestList_id: 3,
        },
        {
          id: 4,
          answer_body: 'question answer',
          rsvpQuestions_id: 4,
          users_id: 4,
          guestList_id: 4,
        },
        {
          id: 5,
          answer_body: 'question answer',
          rsvpQuestions_id: 5,
          users_id: 5,
          guestList_id: 5,
        },
      ])
    })
}