
package com.ap.ap.Security.Repository;

import com.ap.ap.Security.Entity.UsuarioSecurity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<UsuarioSecurity, Integer>{
    Optional<UsuarioSecurity> findByNombreUsuario (String nombreUsuario);
    
    boolean existByNombreUsuario (String nombreUsuario);
    boolean existByEmail (String email);

    public boolean existsByNombreUsuario(String nombreUsuario);

    public boolean existsByEmail(String email);

}
