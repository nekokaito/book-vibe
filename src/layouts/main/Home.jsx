import Books from "../../components/books/Books";

const Home = () => {


    return (
        <div>
            <header className="p-10">
            <div className="hero min-h-96 rounded-3xl bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse gap-3 lg:gap-40">
    <img src="cover.jpg" className="max-w-56 rounded-lg shadow-2xl" />
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-5xl font-bold">Books to freshen<br></br> up your bookshelf</h1>
      <button className="btn mt-5 bg-[#8ed7dd] w-1/2">View The List</button>
    </div>
  </div>
</div> 
 </header>
          <Books></Books>
        </div>
       
           
        
    );
};

export default Home;