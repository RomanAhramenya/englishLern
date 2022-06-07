import { useAppSelector } from "./redux-hook";

export function useAuth() {
const {email,id} = useAppSelector(state => state.user.user)
return {
    isAuth:!!email,
    email,
    id
}
}