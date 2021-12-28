const fs = require('fs')
const toMs = require('ms')
const { MessageType } = require('@adiwajshing/baileys');

/**
 * Add Sewa group.
 * @param {String} gid 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired)}
    _dir.push(obj)
    fs.writeFileSync('./database/group/sewa.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get sewa group position.
 * @param {String} gid 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get sewa group expire.
 * @param {String} gid 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check group is sewa.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking sewa.
 * @param {object} WAConnection
 * @param {Object} _dir 
 */
const expiredCheckS = (nino, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
                nino.sendMessage(_dir[position].id, `Waktu sewa di grup ini sudah habis, bot akan keluar otomatis`, MessageType.text)
                    nino.groupLeave(_dir[position].id)
                        _dir.splice(position, 1)
                        fs.writeFileSync('./database/group/sewa.json', JSON.stringify(_dir, null, 2))
        }
    }, 1000)
}

module.exports = {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheckS,
    checkSewaGroup
}
