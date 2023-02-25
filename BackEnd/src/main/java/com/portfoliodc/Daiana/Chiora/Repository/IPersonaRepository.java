package com.portfoliodc.Daiana.Chiora.Repository;

import com.portfoliodc.Daiana.Chiora.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{
    
}
