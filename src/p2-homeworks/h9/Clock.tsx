import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
     clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number =+setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() ||<br/> /*этими методами берется дата дня и года из операционной системы */
    const stringDate = date?.toLocaleDateString() ||<br/>

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ):(
                <br/>/* этим невидимым тэгом достигаю---экран не дергается когда на этом месте ничего не видит пользователь...но есть невидимый тэг---норм тема  НО у этого тэга стандартный размер не изменить...поэтому если использовать не стандартный шрифт то всеравно будут дергания*/
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
