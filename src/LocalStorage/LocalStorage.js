import { toast } from "react-toastify";

const getLocalData = () => {
    const storeAppsSTR = localStorage.getItem("Installed");
    if (storeAppsSTR) {
        const storeAppsData = JSON.parse(storeAppsSTR);
        return storeAppsData
    }
    else {
        return [];
    }
}

const setLocalData = (id) => {
    const storedAppsData = getLocalData();
    if (storedAppsData.includes(id)) {
        toast("! This app already installed")
    }
    else {
        storedAppsData.push(id);
        const setData = JSON.stringify(storedAppsData);
        localStorage.setItem("Installed", setData)
        toast("! Install is success")
    }
}

const setUnInstallData = (id) => {
    localStorage.setItem("Installed", JSON.stringify(id))
}

const getLocalAppsData=()=>{
     const storedApps = JSON.parse(localStorage.getItem('Installed'));
     return storedApps 
}

export { setLocalData, getLocalData, setUnInstallData, getLocalAppsData }