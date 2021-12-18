pipeline{

	agent {label 'linux'}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/rodoxset/node-lab.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t r7sousa/node-lab:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push r7sousa/node-lab:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
