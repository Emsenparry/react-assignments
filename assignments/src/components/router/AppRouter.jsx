import { Route, Routes } from "react-router-dom"
import { GoalList } from "../assignments/api/goalApiCall"
import { Form } from "../assignments/hooks/form"
import Counter from "../assignments/hooks/counter"
import Notfound from "../assignments/other things/notfound"
import GoalDetail from "../assignments/api/goalApiDetails"

const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Counter />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/goals">
                <Route index element={<GoalList />}/>
                <Route path=":id" element={<GoalDetail />}/>
            </Route>
            <Route path="*" element={<Notfound />}/>
        </Routes>
    )
}

export default AppRouter