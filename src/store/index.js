import { proxy } from "valtio";

const state = proxy({
    color: '#1e1e1e',
    loading: true
})

export default state;