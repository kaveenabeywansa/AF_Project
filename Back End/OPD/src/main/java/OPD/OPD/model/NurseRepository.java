package OPD.OPD.model;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NurseRepository extends MongoRepository<Nurse, String>{

}
