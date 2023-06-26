import { Route, Routes } from "react-router-dom"
import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"
import Paypal from "../components/Paypal"

export const Todoroute = () => {
  return (
    <Routes>
        <Route exact path="/" element={<TodoList />} />
        <Route path="/add" element={<TodoForm />} />
        <Route path="/pay" element={ <Paypal/> }/>
        <Route path="*" element={<TodoList />} />
    </Routes>
  )
}
