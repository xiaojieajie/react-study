import React from 'react'
import './modal.css'

export default function Modal(props) {
    const defaultProps = { // 默认属性
        bg: 'rgba(0,0,0,.5)'
    }
    const datas = Object.assign({}, defaultProps, props)
    return (
        <div onClick={(e) => {
            if (e.target.className === 'modal') datas.onClose()
        }} className="modal" style={{
            background: datas.bg
        }}>
            <div className="modal-center">{datas.children}</div>
        </div>
    )
}
