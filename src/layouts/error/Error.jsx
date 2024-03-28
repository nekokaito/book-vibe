import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p>Opps! Something is wrong.</p>
            <Link className='btn'>Go To Home</Link>
        </div>
    );
};

export default Error;