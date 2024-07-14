<template>
	<div class="footer">
		<div class="upper">
			<div class="sub-container">
				<div class="bitbyte">
					BITBYTE
					<div class="icons">
						<a href="https://www.instagram.com/bitbyte.tpc/" target="_blank"
							><img src="../assets/instagram.svg" alt="instagram"
						/></a>
						<a href="https://github.com/BitByte-TPC" target="_blank"
							><img src="../assets/Github.svg" alt="github"
						/></a>
					</div>
				</div>
				<div class="bsoc">
					BSOC
					<div class="icons">
						<a href="https://discord.gg/9FeNzk4rZ5" target="_blank"
							><img src="../assets/Discord.svg" alt="discord"
						/></a>
						<a href="https://github.com/bsoc-bitbyte" target="_blank"
							><img src="../assets/Github.svg" alt="github"
						/></a>
					</div>
				</div>
			</div>
			<div class="tpc-icons">
				<img class="tpc-logo" src="../assets/TPC logo.svg" alt="instagram" />
				<img class="bsoc-logo" src="../assets/BsoC logo.svg" alt="instagram" />
			</div>
		</div>
		<div class="tpc">
			Contact us @
			<a href="mailto:theprogclub@iiitdmj.ac.in" style="text-decoration: none"
				>tpc.iiitdmj.ac.in</a
			>
			<div>(C) The Programming Club, IIITDMJ, 2024</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
.footer {
	background-color: var(--primary_bg_col);
	padding: 2vw;
	width: 100%;
	background-image: linear-gradient(to top, black 70%, rgba(0, 0, 0, 0) 35%);
}
.upper {
	display: flex;
	justify-content: space-between;
}
.sub-container {
	background-color: var(--secondary_bg_col);
	width: 68%;
	border-radius: 20px;
	padding: 2vw;
	font-family: var(--primary-font), serif;
	font-size: 72px;
	line-height: 56px;
	color: black;
	display: flex;
	justify-content: center;
	box-shadow: 6px 6px 4px var(--minor_col);
	transition: all 0.4s ease;
}
@media (min-width: 750px) {
	.sub-container:hover {
		box-shadow: 14px 14px 4px var(--minor_col);
		transform: translate(-8px, -8px);
	}
}

.bitbyte {
	border-right: 2px solid var(--primary_bg_col);
	padding-right: 8vw;
}
.bsoc {
	padding-left: 8vw;
}
.icons img {
	width: 38px;
	height: 38px;
	margin: 8px;
	border-radius: 8px;
	transition: all 0.4s ease;
}
.icons img:hover {
	background-color: var(--minor_col);
	border-radius: 8px;
	padding: 4px;
}
.tpc-icons {
	align-self: end;
	padding-right: 2vw;
}
.tpc-icons img {
	margin: 8px;
}
.tpc-logo {
	width: 80px;
}
.bsoc-logo {
	width: 60px;
}
.tpc {
	color: var(--font_col);
	text-align: end;
	position: relative;
	font-size: 1.4vw;
	padding-right: 2vw;
	font-family: system-ui;
}
@media (max-width: 850px) {
	.sub-container {
		font-size: 8vw;
	}
	.bitbyte {
		padding-right: 4vw;
	}
	.bsoc {
		padding-left: 4vw;
	}
	.icons img {
		width: 28px;
		height: 28px;
		margin: 4px;
	}
	.tpc-logo {
		width: 64px;
	}
	.bsoc-logo {
		width: 52px;
	}
}
@media (max-width: 600px) {
	.upper {
		flex-direction: column;
		align-items: center;
	}
	.sub-container {
		flex-direction: column;
		max-width: 300px;
		width: 80%;
		line-height: 60px;
		font-size: 52px;
		box-shadow: 14px 14px 4px var(--minor_col);
		transform: translateX(-14px);
	}
	.bitbyte {
		border-bottom: 2px solid var(--primary_bg_col);
		border-image: linear-gradient(
				to right,
				var(--primary_bg_col) 200px,
				transparent 50%
			)
			100% 1;
		border-right: none;
		padding-left: 8px;
	}
	.bsoc {
		padding-left: 8px;
	}
	.icons img {
		border-radius: 8px;
		padding: 2px;
	}
	.tpc-icons {
		margin-top: 32px;
		padding-right: 12px;
	}
	.tpc {
		font-size: 0.8rem;
		padding-right: 16px;
	}
}
</style>
