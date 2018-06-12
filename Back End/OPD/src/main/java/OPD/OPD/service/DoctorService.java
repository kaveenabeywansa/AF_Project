package OPD.OPD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import OPD.OPD.model.Doctor;
import OPD.OPD.model.DoctorRepository;
import OPD.OPD.model.LoginCredentials;

@RestController
@RequestMapping("/doctor")
public class DoctorService {
	@Autowired
	private DoctorRepository docRepository;

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public ResponseEntity<Object> Login(@RequestBody LoginCredentials attempt) {
		Doctor instance = null;
		try {
			instance = FindOne(attempt.getUsername());
			if (instance != null) {
				if (instance.getPassword().equals(attempt.getPassword())) {
					return new ResponseEntity<Object>(true, HttpStatus.OK);
				}
			}
			return new ResponseEntity<Object>(false, HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Object>(false, HttpStatus.UNAUTHORIZED);
		}
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addDoctor(@RequestBody Doctor instance) {
		try {
			docRepository.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("finally")
	@RequestMapping(method = RequestMethod.GET)
	public List<Doctor> getAllDoctors() {
		List<Doctor> docList = null;
		try {
			docList = docRepository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return docList;
		}
	}

	@SuppressWarnings("finally")
	@RequestMapping(value = "/{Id}", method = RequestMethod.GET)
	public Doctor getDoctor(@PathVariable String Id) {
		Doctor instance = null;
		try {
			instance = FindOne(Id);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}

	@RequestMapping(value = "/{Id}", method = RequestMethod.PUT)
	public void updateDoctor(@PathVariable String Id, @RequestBody Doctor instance) {
		try {
			Doctor temp = FindOne(Id);
			if (temp != null) {
				temp.setfName(instance.getfName());
				temp.setlName(instance.getlName());
				// set others if necessary
				docRepository.save(temp);
			}
			docRepository.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/{Id}", method = RequestMethod.DELETE)
	public void deleteDoctor(@PathVariable String Id) {
		try {
			Doctor instance = FindOne(Id);
			if (instance != null)
				docRepository.delete(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("finally")
	private Doctor FindOne(String Id) {
		Doctor instance = null;
		try {
			List<Doctor> docList = docRepository.findAll();
			for (Doctor d : docList) {
				if (d.getUsername().equals(Id)) {
					instance = d;
					break;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}
}
