import Link from "next/link"

async function fetchRepoContents(name) {
	await new Promise((resolve) => setTimeout(resolve, 3000))

	const response = await fetch(`https://api.github.com/repos/${process.env.NEXT_PUBLIC_GIT_CONTACT}/${name}/contents`)
	const contents = await response.json()
	return contents

}

const RepoDirsPage = async ({ name }) => {
	const contents = await fetchRepoContents(name)
	const dirs = contents.filter((content) => content.type === 'dir')
	return (
		<dir>
			<h3>Directories</h3>
			<ul>
				{dirs.map((dir) => (
					<li key={dir.path}>
						<Link href={`/code/repos/${name}/${dir.path}`}>
							{dir.path}
						</Link>
					</li>
				))}
			</ul>
		</dir>
	)
}

export default RepoDirsPage