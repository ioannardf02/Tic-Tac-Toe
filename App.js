import Border from "./components/Border";

function App() {

  const onRefresh = () => {
    window.location.reload(true);
  }

    return(

      <div className= " h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-col">
        <Border/>
        <button className= "rounded-full bg-cyan-300 ring-2 ring-black text-black w-40 h-8 m-8" onClick={onRefresh}>Play Again</button>
      </div>


    );

}

export default App;