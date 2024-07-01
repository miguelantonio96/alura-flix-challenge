import React from 'react'
import Button from '../../../../components/Button'
import { useNavigate } from 'react-router-dom'
import './AddVideoButton.css'

export const AddVideoButton = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Button
          text="New video"
          type="button"
          className="header-video-button"
          onClick={() => navigate("/new_video")}
        />
    </div>
  )
}
