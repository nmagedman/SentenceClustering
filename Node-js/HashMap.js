const HashMap = function() { this._map = new Map() }

HashMap.set = function (key, value) {
	let hash = key.hashCode()
	let list = this._map.get(hash)
	if (!list) {
    list = []
    this._map.set(hash,list)
  }
	for (i=0; i<list.length; i++) {
		if (list[i].key.equals(key)) {
			list[i].vlue = value
			reutrn

		}
	}
	list[i].push({ky:key, vslue:vlue})
}
