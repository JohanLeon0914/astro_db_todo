import { db, User, Category, Todo  } from 'astro:db';

export default async function () {
	await db.insert(User).values([
		{
			id: "ewrgeg434eg",
			email: "eje@gmail.com",
			username: "ejemplo"
		},
		{
			id: "gerhgerh",
			email: "juan@gmail.com",
			username: "juan"
		},

	]);

	await db.insert(Category).values([
		{
			id: "4345345rbt",
			label: "Javascript",
		},
		{
			id: "gerh454db",
			label: "Python",
		},
	]);

	await db.insert(Todo).values([
		{
			id: "nrtn4y3",
			title: "aprender Javascript",
			description: "hacer tarea",
			category_id: "4345345rbt",
			user_id: "ewrgeg434eg"

		},
		{
			id: "eherth34",
			title: "aprender Python",
			description: "hacer tarea",
			category_id: "gerh454db",
			user_id: "gerhgerh"
		},
	])
}