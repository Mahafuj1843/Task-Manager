import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { getToken, setToken, setUserDetails } from "../helper/sessionHelper";
import { hideLoader, showLoader } from "../redux/state/settingSlice";
import { setCancelTask, setCompleteTask, setNewTask, setProgressTask, setTaskSummary } from "../redux/state/taskSlice";
import store from "../redux/store/store";
const BaseURL = "http://localhost:8080/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const RegistrationRequest = (fullname, username, email, password) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/register";
    let PostBody = { fullname: fullname, username: username, email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast("Registration Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const LoginRequest = (email, password) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/login";
    let PostBody = { email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const CreateTaskRequest = (task, description) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/task/create";
    let PostBody = { title: task, desc: description }
    return axios.post(URL, PostBody, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const taskByStatus = (status) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/task/" + status;
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            if (status === 'New')
                store.dispatch(setNewTask(res.data.task))
            else if (status === 'Completed')
                store.dispatch(setCompleteTask(res.data.task))
            else if (status === 'Progress')
                store.dispatch(setProgressTask(res.data.task))
            else if (status === 'Canceled')
                store.dispatch(setCancelTask(res.data.task))
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const taskSummaryRequest = () => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/task/status/count";
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            store.dispatch(setTaskSummary(res.data))
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    })
}

export const taskUpdateRequest = (id, status) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/task/"+id;
    let postBody = {status:status}
    return axios.put(URL, postBody, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data.message)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const taskDeleteRequest = (id) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/task/"+id;
    return axios.delete(URL, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            SuccessToast(res.data.message)
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        }else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}