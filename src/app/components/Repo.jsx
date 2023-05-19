import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepo(name) {
	//await new Promise((resolve) => setTimeout(resolve, 1000))

	const response = await fetch(`https://api.github.com/repos/${process.env.NEXT_PUBLIC_GIT_CONTACT}/${name}`)
	const repos = await response.json()
	return repos
}

const RepoPage = async ({ name }) => {
	const repo = await fetchRepo(name)

	return (
		<dir>
			<h2>{repo.name}</h2>
			<p>{repo.description}</p>
			<div className="card-stats">
				<div className="card-stat">
					<FaStar />
					<span>{repo.stargazers_count}</span>
				</div>
				<div className="card-stat">
					<FaCodeBranch />
					<span>{repo.forks_count}</span>
				</div>
				<div className="card-stat">
					<FaEye />
					<span>{repo.watchers_count}</span>
				</div>
			</div>
		</dir>
	)
}

export default RepoPage