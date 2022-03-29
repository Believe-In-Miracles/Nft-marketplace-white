

export const Types = {
    SWITCHMODE: 'SWITCHMODE',
    ADDMETAMASK: 'ADDMETAMASK'

}


export const switchMode = () => ({
    type: Types.SWITCHMODE,
})

export const addMetamask = (data) => ({
    type: Types.ADDMETAMASK,
    payload: data
})

