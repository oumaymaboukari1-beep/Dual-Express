
package com.dualexpress.mapper;

import com.dualexpress.dto.RoleDTO;
import com.dualexpress.model.Role;

public class RoleMapper {

    public static RoleDTO toDTO(Role role) {
        return new RoleDTO(role.getId(), role.getRole());
    }
}
