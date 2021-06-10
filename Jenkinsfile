pipeline {
    agent { docker { image 'golang' } }
    stages {
        stage('build') {
            steps {
		    sh 'yarn serve'
		sh 'echo "Hello World"
                sh 'go version'
            }
        }
    }
}
