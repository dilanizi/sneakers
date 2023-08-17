import './App.css';

function App() {
  return (
    <div className="wrapper bg-white rounded-2xl ">
      <header className='flex justify-between h-32 border-b items-center px-16 '>
        <div className='flex items-center'>
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div className='ml-4'>
            <h2 className='font-bold uppercase'>React sneakers</h2>
            <p className='text-slate-400'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div>
          <ul className='flex items-center gap-7'>
            <li className='flex'><img src="img/cart.svg" alt="cart" /><span className='ml-3'>1205 руб.</span></li>
            <li><img src="img/like.svg" alt="like" /></li>
            <li><img src="img/profile.svg" alt="profile" /></li>
          </ul>
        </div>
      </header>
      <main className='px-16'>
        <div className='flex justify-between mt-12'>
          <h1 className='font-bold text-3xl'>Все кроссовки</h1>
          <div className='flex items-center h-11 w-61 border-2 rounded-xl ' >
            <img src="img/search.png" alt="search " className='mr-1' />
            <input type="text" placeholder='Поиск'  />
          </div>
        </div>
        <div className='flex mt-10'>
          <div className='card  '>
            <img width={133} height={112} src="img/img1.jpg" alt="img" />
            <h5 className=' text-sm'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='flex justify-between items-center  '>
              <div className='flex flex-col' >
                <span >Цена:</span>
                <b>12999 руб</b>
              </div>
              <button className='button'>
                <img width={32} height={32} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='card '>
            <img width={133} height={112} src="img/img2.jpg" alt="img" />
            <h5 className=' text-sm'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='flex justify-between items-center '>
              <div className='flex flex-col' >
                <span>Цена:</span>
                <b>12999 руб</b>
              </div>
              <button className='button'>
                <img width={32} height={32} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='card '>
            <img width={133} height={112} src="img/img3.jpg" alt="img" />
            <h5 className=' text-sm'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='flex justify-between items-center '>
              <div className='flex flex-col' >
                <span>Цена:</span>
                <b>12999 руб</b>
              </div>
              <button className='button'>
                <img width={32} height={32} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className='card '>
            <img width={133} height={112} src="img/img4.jpg" alt="img" />
            <h5 className=' text-sm'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='flex justify-between items-center '>
              <div className='flex flex-col' >
                <span>Цена:</span>
                <b>12999 руб</b>
              </div>
              <button className='button'>
                <img width={32} height={32} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default App;
