import React from 'react'
import {cleanup, render, fireEvent} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import NewMessageForm from "../NewMessageForm";

afterEach(cleanup)

describe('<NewMessageForm onSend={sendHandler} />', () => {

    let getByTestId

    describe('clicking the send button', () => {

        const sendHandler = jest.fn().mockName('sendHandler')

        beforeEach( async () => {

            ({ getByTestId } = render(<NewMessageForm onSend={sendHandler}/>))

            await userEvent.type(getByTestId('messageText'),
                'New message')

            userEvent.click(getByTestId('sendButton'))

        })

        it('clears the text field', () => {
            expect(getByTestId('messageText').value).toEqual('')
        })

        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New message')
        })

    });
})