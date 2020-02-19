import React from "react"
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App (){
    return (
        <div>
            <Header />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <Footer />
        </div>
    );
}

export default App;