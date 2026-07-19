import { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const DEFAULT_PHONE = '573153745515'
const DEFAULT_PRESET_TEXT = 'Hola! soy ' + ', Quisiera...'

export default function ChatWidget({
    phone = DEFAULT_PHONE,
    presetText = DEFAULT_PRESET_TEXT,
}) {
    const href = useMemo(() => {
        const digits = String(phone).replace(/\D/g, '')
        const text = encodeURIComponent(presetText)
        return `https://wa.me/${digits}?text=${text}`
    }, [phone, presetText])

    return (
        <div className="chat-widget">
            <a className="chat-widget__button" href={href} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" title="WhatsApp" >
                <span className="chat-widget__icon" aria-hidden="true">
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25d366', fontSize: 40 }} />
                </span>
            </a>
        </div>
    )
}


