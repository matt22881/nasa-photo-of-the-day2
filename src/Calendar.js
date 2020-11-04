import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, Form } from 'reactstrap';
import styled from 'styled-components'

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

    
const Calendar = (props) => {
    
    const { changeDate, modalOpen, toggle, today } = props
    const [formDate, setFormDate] = useState(today)
    
    const onClick = (e) => {
        e.preventDefault()
        changeDate(formDate)
        toggle()
    }

    const onChange = (e) => {
        setFormDate(e.target.value)
    }
   
    return (
        <div>
            <MenuContainer>
                <p>Like to See a Different Day?</p>
                <Button color={modalOpen ? 'danger' : 'secondary'} onClick={toggle} >{modalOpen ? 'Close' : 'Open'}</Button>
            </MenuContainer>
                    
                <Modal 
                className='cal-mod'
                isOpen={modalOpen}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
                >
                    <ModalBody
                        opacity='75%'
                        >                
                        <Form>
                            <Label for="newDate">Choose a Date</Label>
                            <Input
                            type="date"
                            name="newDate"
                            min={new Date(1995,6,16)}
                            max={today}
                            id="newDate"
                            onChange={onChange}
                            />
                        </Form>
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button color="primary" onClick={onClick}>Let's See It!</Button>
                    </ModalFooter>
                </Modal> 
        </div>
    )
}

export default Calendar   
