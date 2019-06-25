<template>
    <div class="collections-bottom">
		<div class="container">
			<div class="collections-bottom-grids">
				<div class="collections-bottom-grid">
					<h3>45% Offer For <span>Women & Children's</span></h3>
				</div>
			</div>
			<div class="newsletter">
				<h3>Newsletter</h3>
				<p>Join us now to get all news and special offers.</p>
				<form>
					<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
					<input class="email-item" type="email" value="Enter your email address">
					<input class="email-button" type="submit" value="Join Us" >
				</form>
			</div>
		</div>
	</div>
</template>
<script>
/** 服务页面 */
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .collections-bottom {
        padding: 4em 0;
        display: block;
        font-size: 100%;

        .container {
            display: table;
            content: " ";
            clear: both;
            width: 100%;
            background-color: #dedede;
            background-attachment: fixed;
            background: url('../assets/casual.jpg');
            background-position-y: -50px;
            background-size: cover;

            .collections-bottom-grids {
                min-height: 170px;
                padding: 1.5em 1em 0em;
                width: 500px;
                height: 300px;
                background-color: #cecece;

                .collections-bottom-grid {
                    box-sizing: border-box;

                    h3 {
                        box-sizing: border-box;
                        font-size: 2.3em;
                        margin: 0;
                        line-height: 1.3em;
                        font-weight: bold;

                        span {
                            display: block;
                            color: #212121;
                            font-weight: normal;
                        }
                    }
                }
            }

            .newsletter {
                padding: 20px;
                background-color: #ffffff;
                h3 {
                    background-color: #fff;
                }

                form {
                    padding: 20px 0 0 0;

                    input {
                        height: 30px;
                    }
                    .email-item {
                        width: 200px;
                    }
                    .email-button {
                        background-color: #999;
                    }
                }
            }
        }
    }
</style>
