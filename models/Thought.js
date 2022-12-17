const { Schema, model } = require('mongoose');
//const

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

//virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('thought', thoughtSchema);

module.exports = Thought;