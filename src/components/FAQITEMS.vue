<template>
	<div class="faqs">
		<h1 class="FAQHEADING">FAQ'S</h1>
		<div class="faqitems">
			<FAQ
				v-for="(faq, i) in faqs"
				:faq="faq"
				:index="i"
				:key="i"
				:open="faq.open"
				@toggleOpen="toggleOpen"
			/>
		</div>
	</div>
</template>

<script>
import FAQ from './FAQS.vue'
export default {
	name: 'New',
	components: {
		FAQ,
	},
	data() {
		return {
			faqs: [
				{
					question: 'Why should I participate?',

					answer:
						'Participating in such events provides an amazing learning experience, helps in improving your development skills, getting involved in big organizations and helping to buildnetworks. This is a great place to get you jump-started and up to speed with various industry-demanded technologies and getting involved with some great Open Source communities.',

					open: false,
				},

				{
					question: 'Why is Open Source important?',

					answer:
						'Open source provides you first-hand experience with working on big andreal-world projects, on which many top companies depend, which will give a huge boost in your development career. Not only this, but you also get to work with and learn from some of the most talented developers around the world.',

					open: false,
				},

				{
					question: ' Are there any placement opportunities available?',

					answer:
						'Contributing to some real world project will have a huge impact on your CV and you will gain some experience about how to work in a large organisation with hundreds of contributors.Though direct placement opportunities are rare, there are chances to get full time opportunities in the organisation you’re contributing for a long time. Mentors often recommend contributors to some startup companies or you might get to know people who work in FAANG companies which can help you later when you apply to those companies with referral.',

					open: false,
				},
				{
					question: 'Can we work in groups to participate in this event?',

					answer:
						'No, team participation is not allowed in this event. Everyone must participate individually. But you can collaborate with each other if contributing to the same organization.',

					open: false,
				},

				{
					question: 'How do I submit my pull requests on Event Website? ',

					answer:
						'Head over to the Submit PR tab on your dashboard and fill the form accordingly.',

					open: false,
				},

				{
					question: 'I am stuck. How do I get help?',

					answer:
						'Join our discord server (<a href="https://discord.gg/C72FYTYYcZ">click here to join</a>) and the mentors would be glad to help you there.',

					open: false,
				},

				{
					question: 'Do I need to pay to enter this event?',

					answer:
						'No purchase/payment is necessary to participate or win in this event. It is free of cost.',

					open: false,
				},
			],
		}
	},

	methods: {
		toggleOpen: function (index) {
			this.faqs = this.faqs.map((faq, i) => {
				if (index === i) {
					faq.open = !faq.open
				} else {
					faq.open = false
				}

				return faq
			})
		},
	},
}
</script>
<style>
.FAQHEADING {
	font-family: Stargaze, serif;
	font-size: 6vw;
	margin: 0;
	text-align: center;
	padding-top: 7vh;
	color: #fffaff;
	padding-bottom: 60px;
	background-color: #19192a;
	padding-top: 30px;
	padding-bottom: 50px;
}
.faqitems {
	padding-bottom: 100px;
	background-color: #19192a;
}

@media (max-width: 500px) {
	.FAQHEADING {
		font-size: 15vw;
	}
}
</style>
