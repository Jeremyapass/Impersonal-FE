import { Button } from '@/components/ui/button'
import React from 'react'

const SendFeedbackButton = () => {
  return (
    <div className='self-end'>
        <Button variant="sendFeedbackButton" className="px-[61px] py-[10px]">Send Feedback</Button>
    </div>
  )
}

export default SendFeedbackButton