import React from 'react'
import { Button, Checkbox, Form, Header, Divider, TextArea } from 'semantic-ui-react'

const ContactForm = () => (
  <div>
    <Divider
      as='h2'
      className='header'
      horizontal
      style={{ textTransform: 'uppercase' }}
    >
    Get in touch.
    </Divider>
    <Form size='huge' action="https://formspree.io/fewell@gmail.com"
      method="POST">
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
       <Form.Field control={TextArea} label='Message' placeholder='Send a message...' />
      </Form.Field>
      <Button type='submit' size='huge'>Submit</Button>
    </Form>
  </div>
)

export default ContactForm
