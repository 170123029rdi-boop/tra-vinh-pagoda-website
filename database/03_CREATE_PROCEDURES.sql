-- ============================================================================
-- PART 3: STORED PROCEDURES
-- ============================================================================

USE TRA_VINH_PAGODA;
GO

CREATE PROCEDURE sp_get_pagoda_by_category
    @category_id INT
AS
BEGIN
    SELECT 
        p._id,
        p.name,
        p.description,
        p.address,
        c.type_name,
        c.district
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p.category_id = @category_id
    ORDER BY p.name;
END;
GO

CREATE PROCEDURE sp_get_pagoda_detail
    @pagoda_id INT
AS
BEGIN
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
        p.created_at
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p._id = @pagoda_id;
    
    SELECT 
        _id,
        image_url,
        image_title,
        display_order
    FROM PagodaImage
    WHERE pagoda_id = @pagoda_id
    ORDER BY display_order;
END;
GO

CREATE PROCEDURE sp_get_posts
    @page_number INT = 1,
    @page_size INT = 10
AS
BEGIN
    SELECT 
        _id,
        title,
        content,
        thumbnail,
        author,
        created_at
    FROM Post
    ORDER BY created_at DESC
    OFFSET (@page_number - 1) * @page_size ROWS
    FETCH NEXT @page_size ROWS ONLY;
END;
GO

CREATE PROCEDURE sp_search_pagoda
    @search_keyword NVARCHAR(200)
AS
BEGIN
    SELECT 
        p._id,
        p.name,
        p.description,
        p.address,
        c.type_name,
        c.district
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p.name LIKE N'%' + @search_keyword + N'%'
       OR p.description LIKE N'%' + @search_keyword + N'%'
       OR p.address LIKE N'%' + @search_keyword + N'%'
    ORDER BY p.name;
END;
GO
