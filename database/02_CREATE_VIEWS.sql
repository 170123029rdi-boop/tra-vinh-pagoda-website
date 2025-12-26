-- ============================================================================
-- PART 2: VIEWS
-- ============================================================================

USE TRA_VINH_PAGODA;
GO

CREATE VIEW vw_pagoda_with_category AS
SELECT 
    p._id,
    p.name,
    p.history,
    p.description,
    p.address,
    p.latitude,
    p.longitude,
    c.type_name,
    c.district,
    p.created_at,
    p.updated_at
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id;
GO

CREATE VIEW vw_pagoda_with_image_count AS
SELECT 
    p._id,
    p.name,
    p.address,
    COUNT(pi._id) AS image_count,
    c.type_name
FROM Pagoda p
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
INNER JOIN Category c ON p.category_id = c._id
GROUP BY p._id, p.name, p.address, c.type_name;
GO
