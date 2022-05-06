import React from 'react'
import { Modal } from 'semantic-ui-react';
import EmailForm from '../EmailForm';



function EmailModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<button class="fluid ui button">Contact Poster</button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
        <Modal.Header>
            Do you have information you wish to send privately? Send a message here!
        </Modal.Header>
      <Modal.Content>
        <EmailForm/>
      </Modal.Content>

    </Modal>
  )
}

export default EmailModal;
