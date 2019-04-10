const tokens = {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
}
export default {
    info: res => {
        console.log(res)
        return tokens.admin
    }
}