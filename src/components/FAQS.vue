<template>
	<div :class="open ? 'faq-open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="arrquestion">
			<div class="question">
				<h5>{{ faq.question }}</h5>
			</div>
			<div class="arrow">
				<img src="../assets/white-down-arrow-png-2.png " width="30px" />
			</div>
		</div>
		<div class="answer" v-html="sanitizeHtml(faq.answer)"></div>
	</div>
</template>

<script>
import DOMPurify from 'dompurify'

export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open'],
	methods: {
		sanitizeHtml(html) {
			return DOMPurify.sanitize(html)
		},
	},
}
</script>
<style>
* {
	box-sizing: border-box;
}

body,
html {
	margin: 0;
	padding: 0;
	height: 100%;
	font-family: Arial, sans-serif;
	background-color: #19192a;
	color: #fffaff;
}

.faqs {
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
}

.faq {
	width: 60%;
	max-width: 50%;
	padding: 5px;
	border-radius: 8px;
}

.question {
	width: 50vw;
	margin: 3vh auto 0;
	border-bottom: 0.2vh solid #fffaff;
	cursor: pointer;
	font-size: 24px;
	color: white;
}

.faq .question {
	position: relative;
}

.faq .question::after {
	position: absolute;
	width: 50vw;
	height: 30px;
}

.arrquestion {
	display: flex;
	align-items: end;
	height: 50px;
	width: 50vw;
}

.arrow {
	position: relative;
	right: 4%;
	transition: all 0.5s linear;
}

.faq-open .arrow {
	transform: translateY(-50%) rotate(180deg);
	margin-bottom: 15px;
}

.faq-open .question {
	margin-bottom: 15px;
}

.faq-open {
	width: 50%;
	height: 80%;
}

.answer {
	max-height: 0;
	overflow: hidden;
	font-size: 18px;
	margin-bottom: 25px;
	color: white;
	opacity: 0;
	padding-top: 0;
	padding-bottom: 0;
}

.faq-open .answer {
	max-height: 1000px;
	opacity: 1;
	padding-top: 10px;
	padding-bottom: 10px;
	transition: all 0.5s linear;
}

@media (max-width: 412px) {
	.question {
		font-size: 16px;
		width: 90%;
	}

	.answer {
		font-size: 14px;
		padding-bottom: 40px;
		width: 90%;
	}
}

@media (max-width: 500px) {
	.arrquestion {
		margin-bottom: 40px;
	}
}
</style>
