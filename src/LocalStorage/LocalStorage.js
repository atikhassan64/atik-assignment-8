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
        alert('Already added the data')
    }
    else {
        storedAppsData.push(id);
        const setData = JSON.stringify(storedAppsData);
        localStorage.setItem("Installed", setData)
        // console.log(storedAppsData)
    }
}

const setUnInstallData=(id)=>{
    localStorage.setItem("Installed", JSON.stringify(id))
}

export { setLocalData, getLocalData, setUnInstallData }