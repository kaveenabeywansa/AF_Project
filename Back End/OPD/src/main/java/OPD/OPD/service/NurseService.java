package OPD.OPD.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import OPD.OPD.model.Nurse;
import OPD.OPD.model.NurseRepository;

@CrossOrigin
@RestController
@RequestMapping("/nurse")
public class NurseService {
	@Autowired
	private NurseRepository nurseRepository;

	@RequestMapping(method = RequestMethod.POST)
	public void addNurse(@RequestBody Nurse instance) {
		try {
			nurseRepository.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("finally")
	@RequestMapping(method = RequestMethod.GET)
	public List<Nurse> getAllNurses() {
		List<Nurse> nurseList = null;
		try {
			nurseList = nurseRepository.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return nurseList;
		}
	}

	@SuppressWarnings("finally")
	@RequestMapping(value = "/{Id}", method = RequestMethod.GET)
	public Nurse getNurse(@PathVariable String Id) {
		Nurse instance = null;
		try {
			instance = FindOne(Id);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return instance;
		}
	}

	@RequestMapping(value = "/{Id}", method = RequestMethod.PUT)
	public void updateNurse(@PathVariable String Id, @RequestBody Nurse instance) {
		try {
			Nurse temp = FindOne(Id);
			if (temp != null) {
				temp.setfName(instance.getfName());
				temp.setlName(instance.getlName());
				// set others if necessary
				nurseRepository.save(temp);
			}
			nurseRepository.save(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "/{Id}", method = RequestMethod.DELETE)
	public void deleteNurse(@PathVariable String Id) {
		try {
			Nurse instance = FindOne(Id);
			if (instance != null)
				nurseRepository.delete(instance);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@SuppressWarnings("finally")
	public Nurse FindOne(String Id) {
		Nurse instance = null;
		try {
			List<Nurse> nurseList = nurseRepository.findAll();
			for (Nurse n : nurseList) {
				if (n.getUsername().equals(Id)) {
					instance = n;
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
