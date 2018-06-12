package OPD.OPD.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="doctor")
public class Doctor {
	@Id
	private String doc
}
