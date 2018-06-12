package OPD.OPD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import OPD.OPD.model.Doctor;
import OPD.OPD.model.LoginCredentials;
import OPD.OPD.model.LoginRepository;
import OPD.OPD.model.Nurse;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginService {
	@Autowired
	private LoginRepository loginRepo;
	
	@RequestMapping(path="/user",method = RequestMethod.POST)
	public ResponseEntity<Object> Login(@RequestBody LoginCredentials attempt) {
		try {
			LoginCredentials data = findUser(attempt.getUsername());
			if (data != null) {
				if (data.getPassword().equals(attempt.getPassword())) {
					return new ResponseEntity<Object>(data.getUserType(), HttpStatus.OK);
				}
			}
			return new ResponseEntity<Object>("Incorrect Credentials", HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(false, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@SuppressWarnings("finally")
	public LoginCredentials findUser(String Id) {
		LoginCredentials instance = null;
		try {
			List<LoginCredentials> userList = loginRepo.findAll();
			for (LoginCredentials log : userList) {
				if (log.getUsername().equals(Id)) {
					instance = log;
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public void registerLogin(@RequestBody LoginCredentials instance) {
		try {
			loginRepo.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
