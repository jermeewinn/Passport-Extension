import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addReaction, { error }] = useMutation(ADD_COMMENT);

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await ADD_COMMENT({
                variables: { commentBody, postId },
            });

            // clear form value
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };
}