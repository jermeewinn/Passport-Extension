import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
    const [commentBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

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

    return(
        <div>
            <p className={`m-0 ${characterCount === 300 || error ? 'text-error': ''}`}>
                Character Count: {characterCount}/300
                {error && <span className='m1-2'>Something went wrong...</span>}
            </p>    
            <form 
                className='flex-row justify-center justify-space-between-md align-stretch'
                onSubmit={handleFormSubmit}
            >
                {/* textarea for comment */}
                <textarea
                    placeholder='Leave a comment'
                    value={commentBody}
                    className='form-input col-12 col-md-9'
                    onChange={handleChange}>
                </textarea>
                {/* submit button for comment textarea */}
                <button className='button is-info' type='submit'>
                    Submit
                </button>
            </form>

            {error && <div>Something went wrong...</div>}
        </div>
    );
};

export default CommentForm;