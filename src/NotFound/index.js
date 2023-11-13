import './index'
import notfoundimg from './notFound.png'

function NotFound (){
    return (
                <figure>
            <img src={notfoundimg} alt='Not found img'/>
        </figure>
    )
}

export { NotFound }
