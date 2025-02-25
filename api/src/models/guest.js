const supabase = require("../configs/supabase")

module.exports = {
	getCountGuest: (search) =>
		new Promise((resolve, reject) => {
			supabase
				.from("tb_guests")
				.select("*", { count: "exact" })
				.like("name", `%${search}%`)
				.then((result) => {
					if (!result.error) {
						resolve(result.count)
					} else {
						reject(result)
					}
				})
		}),
	getAllGuest: (offset, limit, sortBy, search, sortType) =>
		new Promise((resolve, reject) => {
			supabase
				.from("tb_guests")
				.select("*")
				.range(offset, offset + limit - 1)
				.order(sortBy, { ascending: sortType })
				.like("name", `%${search}%`)
				.then((result) => {
					if (!result.error) {
						resolve(result)
					} else {
						reject(result)
					}
				})
		}),
	getGuestBySlug: (slug) =>
		new Promise((resolve, reject) => {
			supabase
				.from("tb_guests")
				.select("*")
				.eq("slug", slug)
				.then((result) => {
					if (!result.error) {
						resolve(result)
					} else {
						reject(result)
					}
				})
		}),
	addGuest: (data) =>
		new Promise((resolve, reject) => {
			supabase
				.from("tb_guests")
				.insert([data]) // Pastikan data dalam array
				.select() // Tambahkan select() untuk mendapatkan data yang baru diinsert
				.then((result) => {
					if (!result.error) {
						resolve(result)
					} else {
						reject(result)
					}
				})
		}),
}
