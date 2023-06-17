

const Banner = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 items-center mx-5'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate necessitatibus tempore assumenda molestias autem error voluptatem fugiat soluta reiciendis.</h1>
                <div className='mt-10'>
                <button className='btn btn-outline me-10'>explore </button>
                <button className='btn btn-outline'> CV Download</button>
                </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
            </div>
        </div>
    );
};

export default Banner;