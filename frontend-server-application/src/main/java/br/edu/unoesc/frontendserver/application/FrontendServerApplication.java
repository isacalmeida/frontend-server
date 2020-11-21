package br.edu.unoesc.frontendserver.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.edu.unoesc.sistemautils.arquitetura.application.ApplicationStarter;
import br.edu.unoesc.sistemautils.arquitetura.constants.BasePackagesConstants;

@SpringBootApplication(scanBasePackages = BasePackagesConstants.FRONTEND_SERVER)
public class FrontendServerApplication {

	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(FrontendServerApplication.class);
		springApplication.setMainApplicationClass(ApplicationStarter.class);
		springApplication.run(args);
	}
}
