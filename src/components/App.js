import React from "react"
import Footer from "./Footer";
import Header from "./Header";
import TodoItem from "./TodoItem";
import todoData from "../todoData"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
    }

     render (){
        const todoItems = this.state.todos.map(item => 
            <TodoItem 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange} 
            />)
    
        return (
            <div>
                <Header />
                {todoItems}
                <Footer />
            </div>
        );
    }
}

export default App;